import os
import argparse

def change_extension(directory, old_ext, new_ext, recursive):
    # Check if the provided directory exists
    if not os.path.isdir(directory):
        print(f"Error: The directory '{directory}' does not exist.")
        return
    
    # Walk through directory (recursively if recursive is True)
    for root, _, files in os.walk(directory):
        for filename in files:
            # Check if the file has the old extension
            if filename.endswith(old_ext):
                # Construct full file paths
                old_file = os.path.join(root, filename)
                new_file = os.path.join(root, filename.replace(old_ext, new_ext))
                
                # Rename the file with the new extension
                os.rename(old_file, new_file)
                print(f"Renamed: '{old_file}' -> '{new_file}'")
        
        # If not recursive, process only the top directory
        if not recursive:
            break

if __name__ == "__main__":
    # Set up argument parsing
    parser = argparse.ArgumentParser(description="Change file extensions in a directory.")
    parser.add_argument("-d", "--directory", required=True, help="Directory containing the files")
    parser.add_argument("-o", "--old_ext", required=True, help="Old file extension (e.g., '.txt')")
    parser.add_argument("-n", "--new_ext", required=True, help="New file extension (e.g., '.md')")
    parser.add_argument("-r", "--recursive", action="store_true", help="Change extensions recursively in subdirectories")

    args = parser.parse_args()

    # Run the function with parsed arguments
    change_extension(args.directory, args.old_ext, args.new_ext, args.recursive)
