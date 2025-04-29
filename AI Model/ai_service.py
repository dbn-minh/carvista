from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

# Load model Mistral 7B
model_name = "mistralai/Mistral-7B-Instruct-v0.2"
tokenizer = AutoTokenizer.from_pretrained(model_name, trust_remote_code=True)
model = AutoModelForCausalLM.from_pretrained(
    model_name,
    device_map="auto",
    torch_dtype=torch.float16,
    trust_remote_code=True
)

def ask_mistral(prompt):
    inputs = tokenizer(prompt, return_tensors="pt").to(model.device)

    outputs = model.generate(**inputs, max_new_tokens=512, temperature=0.7)

    response = tokenizer.decode(outputs[0], skip_special_tokens=True)

    # Cắt phần input prompt ra khỏi output nếu cần
    return response[len(prompt):].strip()
