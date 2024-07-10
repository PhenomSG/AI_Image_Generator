document.getElementById('generate-button').addEventListener('click', generateImage);

function generateImage() {
    const data = {
        key: "1C2E4Cy0VlkWDY0Gfmdrz6pwFCKDIqln3lPzo255aFmAYEsrq0jkUz9kdWUu",
        prompt: "ultra realistic close up portrait ((beautiful pale cyberpunk female with heavy black eyeliner)), blue eyes, shaved side haircut, hyper detail, cinematic lighting, magic neon, dark red city, Canon EOS R3, nikon, f/1.4, ISO 200, 1/160s, 8K, RAW, unedited, symmetrical balance, in-frame, 8K",
        negative_prompt: "((out of frame)), ((extra fingers)), mutated hands, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), (((deformed))), (((tiling))), ((naked)), ((tile)), ((fleshpile)), ((ugly)), (((abstract))), blurry, ((bad anatomy)), ((bad proportions)), ((extra limbs)), cloned face, (((skinny))), glitchy, ((extra breasts)), ((double torso)), ((extra arms)), ((extra hands)), ((mangled fingers)), ((missing breasts)), (missing lips), ((ugly face)), ((fat)), ((extra legs))",
        width: "512",
        height: "512",
        samples: "1",
        num_inference_steps: "20",
        safety_checker: "no",
        enhance_prompt: "yes",
        temp: "yes",
        seed: null,
        guidance_scale: 7.5,
        webhook: null,
        track_id: null
    };

    fetch('https://modelslab.com/api/v3/text2img', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        const imgUrl = data.output[0];
        document.getElementById('generated-image').src = imgUrl;
        document.getElementById('image-url').textContent = imgUrl;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
