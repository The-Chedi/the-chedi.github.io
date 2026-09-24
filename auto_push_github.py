import os
import subprocess
import sys
from pathlib import Path

# ---------------------------------------------------------
# AUTO PUSH ALL FILES + SUBFOLDERS TO GITHUB
# Put this .py file inside your project folder and run it.
# ---------------------------------------------------------

PROJECT_DIR = Path(__file__).resolve().parent


def run(cmd, check=True):
    print("\n>", " ".join(cmd))
    result = subprocess.run(
        cmd,
        cwd=PROJECT_DIR,
        text=True
    )
    if check and result.returncode != 0:
        print(f"\nCommand failed with exit code {result.returncode}.")
        sys.exit(result.returncode)
    return result


def git_available():
    result = subprocess.run(
        ["git", "--version"],
        capture_output=True,
        text=True
    )
    return result.returncode == 0


print("=" * 60)
print("       AUTO GITHUB UPLOADER")
print("=" * 60)
print(f"\nProject folder:\n{PROJECT_DIR}\n")

if not git_available():
    print("ERROR: Git is not installed or is not in PATH.")
    print("Install Git for Windows, then run this script again.")
    input("\nPress Enter to exit...")
    sys.exit(1)

# Ask for GitHub repository
repo_url = input(
    "Paste your GitHub repository URL\n"
    "(example: https://github.com/username/repository.git):\n> "
).strip()

if not repo_url:
    print("No repository URL provided.")
    input("\nPress Enter to exit...")
    sys.exit(1)

# Initialize Git if needed
if not (PROJECT_DIR / ".git").exists():
    print("\nInitializing Git repository...")
    run(["git", "init"])
else:
    print("\nGit repository already exists.")

# Set main branch
run(["git", "branch", "-M", "main"])

# Configure remote
remote_check = subprocess.run(
    ["git", "remote", "get-url", "origin"],
    cwd=PROJECT_DIR,
    capture_output=True,
    text=True
)

if remote_check.returncode == 0:
    current_remote = remote_check.stdout.strip()
    print(f"\nExisting origin: {current_remote}")
    change = input("Replace it with the repository above? [Y/n]: ").strip().lower()

    if change != "n":
        run(["git", "remote", "set-url", "origin", repo_url])
else:
    run(["git", "remote", "add", "origin", repo_url])

# Add EVERYTHING recursively
print("\nAdding all files and subfolders...")
run(["git", "add", "."])

# Show status
print("\nFiles that will be committed:")
run(["git", "status", "--short"])

# Commit
commit_message = input(
    "\nCommit message [Update all project files]: "
).strip()

if not commit_message:
    commit_message = "Update all project files"

commit_result = subprocess.run(
    ["git", "commit", "-m", commit_message],
    cwd=PROJECT_DIR,
    text=True
)

if commit_result.returncode != 0:
    print("\nNothing new to commit, or Git needs your user name/email configured.")

    # Check whether there are actually changes
    status = subprocess.run(
        ["git", "status", "--porcelain"],
        cwd=PROJECT_DIR,
        capture_output=True,
        text=True
    )
    if status.stdout.strip():
        print("\nThere are files that could not be committed.")
        print("Git may need your name/email:")
        print('  git config --global user.name "Your Name"')
        print('  git config --global user.email "you@example.com"')
        input("\nPress Enter to exit...")
        sys.exit(1)

# Push
print("\nPushing EVERYTHING to GitHub...")
push = subprocess.run(
    ["git", "push", "-u", "origin", "main"],
    cwd=PROJECT_DIR,
    text=True
)

if push.returncode != 0:
    print("\nPush failed.")
    print("\nIf the GitHub repository already contains files, you may need:")
    print("  git pull --rebase origin main")
    print("then run this script again.")
    input("\nPress Enter to exit...")
    sys.exit(push.returncode)

print("\n" + "=" * 60)
print("SUCCESS! All files and subfolders were pushed to GitHub.")
print("=" * 60)
print(f"\nLocal folder: {PROJECT_DIR}")
print(f"GitHub repo:  {repo_url}")

input("\nPress Enter to exit...")
