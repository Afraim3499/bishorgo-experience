import sys
from PIL import Image
import numpy as np
import cv2

img_path = r"d:\Bishorgo Experience\bishorgo-logo-website.png"
img = Image.open(img_path).convert("RGBA")
width, height = img.size
data = np.array(img)

r_ch, g_ch, b_ch, a_ch = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]

# Refined masks based on actual colors found:
# Green is around [7, 47, 30]
green_mask = (r_ch < 25) & (g_ch > 35) & (g_ch < 60) & (b_ch > 15) & (b_ch < 40) & (a_ch > 100)
# Gold is around [187, 129, 45]
gold_mask = (r_ch > 150) & (r_ch < 220) & (g_ch > 100) & (g_ch < 160) & (b_ch > 25) & (b_ch < 60) & (a_ch > 100)

print(f"Green pixels: {np.sum(green_mask)}")
print(f"Gold pixels: {np.sum(gold_mask)}")

def get_svg_path(mask, name):
    binary = np.zeros((height, width), dtype=np.uint8)
    binary[mask] = 255
    contours, _ = cv2.findContours(binary, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    
    print(f"\n--- {name} SVG Paths ---")
    paths = []
    for i, c in enumerate(contours):
        if cv2.contourArea(c) < 50:
            continue
        
        # Simplify contour
        epsilon = 0.001 * cv2.arcLength(c, True)
        approx = cv2.approxPolyDP(c, epsilon, True)
        
        path_str = []
        for j, pt in enumerate(approx):
            x, y = pt[0]
            if j == 0:
                path_str.append(f"M {x} {y}")
            else:
                path_str.append(f"L {x} {y}")
        path_str.append("Z")
        final_path = " ".join(path_str)
        paths.append(final_path)
        print(f"Path {i} (Area: {cv2.contourArea(c):.1f}, Points: {len(approx)}):")
        print(final_path)
    return paths

get_svg_path(green_mask, "Green Wing")
get_svg_path(gold_mask, "Gold Elements")
