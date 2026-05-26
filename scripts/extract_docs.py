"""Extract text from all .docx files in 商业 and 小作 folders."""
import os
import sys
from docx import Document

BASE_DIRS = [
    os.path.expanduser(r"~\Desktop\商业"),
    os.path.expanduser(r"~\Desktop\小作"),
]

OUTPUT_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), "content", "_extracted")
os.makedirs(OUTPUT_DIR, exist_ok=True)

def extract_docx(filepath):
    try:
        doc = Document(filepath)
        paragraphs = []
        for para in doc.paragraphs:
            text = para.text.strip()
            if text:
                paragraphs.append(text)
        return "\n\n".join(paragraphs)
    except Exception as e:
        return f"[ERROR: {e}]"

def main():
    for base_dir in BASE_DIRS:
        folder_name = os.path.basename(base_dir)
        print(f"\n{'='*60}")
        print(f"Folder: {folder_name}")
        print(f"{'='*60}")
        
        if not os.path.exists(base_dir):
            print(f"  [SKIP] Directory not found: {base_dir}")
            continue
            
        for root, dirs, files in os.walk(base_dir):
            for filename in files:
                if filename.endswith(('.docx', '.doc')) and not filename.startswith('~'):
                    filepath = os.path.join(root, filename)
                    relpath = os.path.relpath(filepath, base_dir)
                    print(f"  Processing: {relpath}")
                    
                    text = extract_docx(filepath)
                    
                    safe_name = relpath.replace('\\', '_').replace('/', '_')
                    safe_name = safe_name.rsplit('.', 1)[0] + '.txt'
                    out_path = os.path.join(OUTPUT_DIR, f"{folder_name}_{safe_name}")
                    
                    with open(out_path, 'w', encoding='utf-8') as f:
                        f.write(text)
                    
                    word_count = len(text)
                    print(f"    -> {word_count} chars, saved to {safe_name}")

if __name__ == "__main__":
    main()
    print("\n=== Extraction Complete ===")
