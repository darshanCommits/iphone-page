
from PIL import Image

# Set the desired size for the images
target_size = (653, 914)  # Width x Height

# Iterate through each image file
image_files = ["purple.png", "gray.png"]

for file in image_files:
    # Open the image
    image = Image.open(file)
    
    # Resize the image
    resized_image = image.resize(target_size)
    
    # Save the resized image with a new filename
    new_filename = "resized_" + file
    resized_image.save(new_filename)
