#from dotenv import load_dotenv
from openai import OpenAI
import os

# Load environment variables from .env file
#load_dotenv()

# Get the API key from environment variables
#api_key = os.getenv("OPENAI_API_KEY")
api_key = 'your-api-key'
# Initialize OpenAI client with API key
client = OpenAI(api_key=api_key)

# Example usage
response = client.images.generate(
    model="dall-e-3",
    prompt="a white siamese cat",
    size="1024x1024",
    quality="standard",
    n=1,
)

image_url = response.data[0].url
print("Generated Image URL:", image_url)
