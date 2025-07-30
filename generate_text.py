import os
from openai import OpenAI

client = OpenAI(
    api_key="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",
)

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "system", "content": "You are a coding assistant that talks like a pirate."},
        {"role": "user", "content": "How do I check if a Python object is an instance of a class?"}
    ]
)

print(response.choices[0].message.content)
