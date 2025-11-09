import tkinter as tk

def on_button_click():
    """Function to be called when the button is clicked."""
    label.config(text="Button clicked!")

# Create the main application window
root = tk.Tk()
root.title("Simple Tkinter App")
root.geometry("300x150")  # Set window size (width x height)

# Create a label widget
label = tk.Label(root, text="Hello, Tkinter!")
label.pack(pady=20)  # Pack the label with some vertical padding

# Create a button widget
button = tk.Button(root, text="Click Me", command=on_button_click)
button.pack()

# Start the Tkinter event loop
root.mainloop()