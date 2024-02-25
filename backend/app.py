from flask import Flask, request, jsonify
from transformers import BlipProcessor, BlipForConditionalGeneration
from PIL import Image
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

processor = BlipProcessor.from_pretrained("Salesforce/blip-image-captioning-base")
model = BlipForConditionalGeneration.from_pretrained("Salesforce/blip-image-captioning-base")

@app.route('/predict', methods=['POST'])
def predict():
    try:
        if 'image' not in request.files:
            return jsonify({'error': 'No image found in request'}), 400

        print("Request received")
        image_file = request.files['image']
        image = Image.open(image_file)
        inputs = processor(images=image, return_tensors="pt")
        outputs = model.generate(**inputs)
        caption = processor.decode(outputs[0], skip_special_tokens=True)
        print("Caption generated:", caption)

        return jsonify({'caption': caption})
    except Exception as e:
        print("Error:", e)
        return jsonify({'error': 'An error occurred'}), 500


if __name__ == '__main__':
    app.run(debug=True)