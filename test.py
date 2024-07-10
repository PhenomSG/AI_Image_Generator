from diffusers import DiffusionPipeline

# Load the pre-trained pipeline
pipeline = DiffusionPipeline.from_pretrained("cloudqi/cqi_text_to_image_pt_v0")

# Define the text prompt
text_prompt = "Anime girl"

# Generate the image
image = pipeline(text_prompt).images[0]

# Display the image (using PIL)
image.show()

# Save the image
image.save("generated_image.png")
