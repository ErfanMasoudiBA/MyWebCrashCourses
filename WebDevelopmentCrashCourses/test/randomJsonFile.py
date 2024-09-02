import json
import random
import string

def generate_random_name(length=5):
    return ''.join(random.choices(string.ascii_lowercase, k=length)).capitalize()

def generate_data(num_entries=1000):
    data = []
    for i in range(1, num_entries + 1):
        entry = {
            "id": i,
            "first_name": generate_random_name(),
            "last_name": generate_random_name()
        }
        data.append(entry)
    return data

def save_to_json(data, filename='data.json'):
    with open(filename, 'w') as file:
        json.dump(data, file, indent=4)

if __name__ == "__main__":
    data = generate_data(1000)
    save_to_json(data)
    print(f"JSON file with {len(data)} entries has been created.")
