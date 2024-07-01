document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.querySelector('.generate-button');
    const inspireMeButton = document.querySelector('.inspire-me-button');
    const usePromptButtons = document.querySelectorAll('.use-prompt-button');
    const textarea = document.querySelector('textarea');
    const negativePromptsInput = document.getElementById('negative-prompts');

    const prompts = [
        `Create an image of a robot painting a portrait of another robot in a futuristic studio. The setting is a harmonious blend of steampunk and modern futuristic elements, showcasing a mix of intricate gears, polished metal, and advanced technology. The painting robot is an exquisite blend of realistic human features and robotic enhancements, with a sleek, high-tech design that incorporates elements of steampunk aesthetics. Its body is made of polished metal and synthetic materials, with visible gears and cogs that move gracefully as it works. The robot has human-like limbs with metallic skin that gleams under the studio lights, and its face features expressive eyes that convey a deep sense of creativity and focus.

        The robot artist is positioned in front of an easel, its hand holding a brush with precision as it carefully applies strokes to the canvas. The portrait it is painting depicts another robot, equally detailed and lifelike, with a unique design that blends steampunk elements and modern robotics. The subject robot has a humanoid form with intricate metallic patterns and gears integrated into its body, and its face reflects a serene, almost human-like expression.

        The studio itself is a marvel of futuristic design, filled with a mix of traditional art tools and cutting-edge technology. Classic wooden easels and paintbrushes sit alongside holographic projectors, digital tablets, and robotic arms that assist in the creative process. The walls are adorned with colorful, high-resolution artwork that combines steampunk and modern art styles, creating a visually stimulating environment.

        Vivid colors dominate the scene, with vibrant hues of blue, red, gold, and silver intermingling to create a dynamic and energetic atmosphere. The lighting is soft yet bright, casting a warm glow over the entire studio and highlighting the intricate details of both the painting robot and the portrait it is creating.

        The painting robot's body is a masterpiece of design, with a sleek, athletic build that is both functional and aesthetically pleasing. Its joints are seamlessly integrated, allowing for smooth, precise movements, and its metallic skin is adorned with delicate engravings and patterns that add to its artistic allure. The robot's eyes are particularly striking, glowing with an inner light that reflects its deep understanding and appreciation of art.

        As the robot works, holographic projections emerge from its fingertips, adding layers of depth and complexity to the portrait. These projections blend seamlessly with the traditional paint on the canvas, creating a unique fusion of old and new artistic techniques. The portrait itself is highly detailed, capturing the essence of the subject robot with remarkable accuracy and creativity.

        In the background, various pieces of art and technology coexist, illustrating the endless possibilities when traditional artistry meets advanced robotics.`,
        
        `Create an image of a beautiful Indian woman with a bloody smile, centered, and thick robotic skin, set in a vivid and intricate future where robotics and art converge. She stands at 5'9" with an athletic, slim build, and well-proportioned curves. Her oval-shaped face features large, expressive brown or hazel eyes, a straight nose with a slight curve, and full lips. Her fair to lightly tanned skin with a warm undertone complements her medium to long dark hair, styled either straight, wavy, or in a relaxed updo. The scene captures her in a confident and relaxed pose, perhaps with one hand on her hip, amidst a futuristic studio filled with classical art tools and advanced technological devices. Her body seamlessly blends with artistic elements like flowing paint or holographic projections emerging from her fingertips. Intricately designed metallic patterns adorn her robotic skin, and her eyes glow with an inner light, reflecting a deep appreciation for art. The studio is vibrant and dynamic, filled with wonder and inspiration, highlighting the harmonious blend of old and new. The setting evokes a sense of creativity and innovation, with the backdrop being a rich Indian-inspired environment, full of cultural motifs and traditional patterns. Keywords: vivid colors, intricate details, humanoid robot, metallic patterns, traditional and digital techniques, futuristic studio, artistic elements, blend of old and new, creative and innovative, glowing eyes, wonder and inspiration, Indian beauty, cultural richness.`,

        `In a magical garden where vibrant flowers and mystical creatures abound, an adorable boy with bright eyes and a charming smile stands holding a beautiful flower. His small hands tremble slightly with excitement as he offers the delicate blossom to an equally adorable little girl, her face lighting up with pure joy and wonder. The garden, bathed in the soft glow of twilight, seems to sparkle around them, with twinkling fairy lights and the gentle rustling of leaves adding to the enchanting atmosphere. The girl's eyes widen as she reaches out to accept the flower, her cheeks flushed with a hint of rosy color. She wears a flowing dress that seems to shimmer with every movement, blending seamlessly with the garden's magical aura. The boy's gesture is simple yet profoundly touching, encapsulating the innocence and sweetness of young affection. As they stand close, their small hearts beating in synchrony, the garden around them seems to pause, celebrating this tender moment of joy and budding romance. The air is filled with the scent of blooming flowers and the gentle hum of nature, creating a perfect backdrop for this enchanting exchange. In this timeless moment, the magical garden becomes a haven of pure, unspoken emotions, capturing the beauty of young love in its most innocent and genuine form.`
    ];

    generateButton.addEventListener('click', async () => {
        const prompt = textarea.value;
        const negativePrompt = negativePromptsInput.value;
        
        try {
            const response = await fetch('https://stable-diffusion-api.example.com/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    prompt: prompt,
                    negative_prompt: negativePrompt,
                    // Add other necessary parameters here, e.g., aspect ratio, style, etc.
                })
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Image generated successfully:', data);
                // Handle the response, e.g., display the generated image.
            } else {
                console.error('Error generating image:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });

    usePromptButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            textarea.value = prompts[index];
        });
    });

    inspireMeButton.addEventListener('click', () => {
        textarea.value = "Imagine a cute little girl wearing a dragon costume for Halloween holding a jack-o'-lantern Halloween bucket. Cinematic composition, created in Unreal Engine 4, potentially featured on ArtStation and CGSociety, dramatic lighting, 8k, digital render.";
    });
});
