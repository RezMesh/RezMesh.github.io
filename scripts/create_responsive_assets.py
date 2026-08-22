from pathlib import Path
from PIL import Image

assets = Path("client/public/assets")

outputs = [
    ("rezvanmesh-mark.webp", "rezvanmesh-mark-96.webp", 96, 86),
    ("rezvanmesh-cube.webp", "rezvanmesh-cube-400.webp", 400, 84),
    ("rezvanmesh-cube.webp", "rezvanmesh-cube-640.webp", 640, 85),
]

for source_name, target_name, width, quality in outputs:
    with Image.open(assets / source_name) as image:
        height = round(image.height * width / image.width)
        image = image.resize((width, height), Image.Resampling.LANCZOS)
        image.save(assets / target_name, "WEBP", quality=quality, method=6)
        print(f"{target_name}: {width}x{height}")
