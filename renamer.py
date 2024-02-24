import os

def rename_files_in_folder(folder_path):
    # Get a list of files in the folder
    files = os.listdir(folder_path)

    # Sort the files if necessary; this could be customized
    files.sort()

    # Initialize the starting number for the files
    start_number = 1

    for filename in files:
        # Create the new file name
        new_filename = f"mage_{start_number}.png"
        # Get the full path of the current and new file names
        old_file = os.path.join(folder_path, filename)
        new_file = os.path.join(folder_path, new_filename)

        # Rename the file
        os.rename(old_file, new_file)

        # Increment the number for the next file
        start_number += 1

# Example usage
folder_path = 'src/assets/images/mages' # Replace this with the path to your folder
rename_files_in_folder(folder_path)
