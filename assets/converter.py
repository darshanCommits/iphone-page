from PIL import Image

def convert_white_to_transparent(image_path, output_path):
    # Open the image
    image = Image.open(image_path)
    
    # Convert the image to RGBA if it's not already
    if image.mode != 'RGBA':
        image = image.convert('RGBA')
    
    # Get the pixel data
    pixel_data = image.load()
    
    # Iterate over each pixel and set the alpha value to 0 for white pixels
    width, height = image.size
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixel_data[x, y]
            if r == 255 and g == 255 and b == 255:
                pixel_data[x, y] = (r, g, b, 0)
    
    # Save the image with the transparent background
    image.save(output_path)

# Example usage
input_image_path = 'logo.png'
output_image_path = 'log.png'
convert_white_to_transparent(input_image_path, output_image_path)
