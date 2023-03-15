import { useEffect } from "react";

import { Particle } from "./Particle";


const ParticleCanvas = () => {
    let canvasId = Math.round(Math.random() * 10);

    let canvas = undefined;
    let ctx = undefined;

    let x = 0;
    let y = 0;
    let particles = [];

    useEffect(() => {
        canvas = document.getElementById(canvasId);
        canvas.style.position = 'absolute';
        canvas.style.pointerEvents = 'none';
        canvas.style.maxWidth = '100%';

        ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        window.addEventListener('mousemove', e => {
            let canvasPosition = canvas.getBoundingClientRect();
            x = e.x - canvasPosition.left;
            y = e.y - canvasPosition.top;

            const newParticle = new Particle(ctx, x, y);
            particles.push(newParticle);
        })


        window.addEventListener('mouseleave', e => {
            x = undefined;
            y = undefined;
        });

        window.addEventListener('click', e => {
            let canvasPosition = canvas.getBoundingClientRect();
            x = e.x - canvasPosition.left;
            y = e.y - canvasPosition.top;

            for (let i = 0; i < 10; i++) {
                const newParticle = new Particle(ctx, x, y);
                particles.push(newParticle);
            }

        })

        window.addEventListener("resize", e => {
            const app = document.querySelector('#root');
            // console.log(app.offsetWidth, app.offsetHeight);
            canvas.width = app.offsetWidth;
            canvas.height = app.offsetHeight;
            // canvas.width = window.innerWidth;
            // canvas.height = window.innerHeight;
        });

        animate();
    }, []);


    let lastTime = 0;

    const animate = (timeStamp) => {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles = particles.filter(p => !p.markedForDeletion)
        particles.forEach(particle => particle.update(deltaTime));
        particles.forEach(particle => particle.draw(ctx));

        requestAnimationFrame(animate);
    }

    return (
        <>
            <canvas className="canvas" id={canvasId}></canvas>


        </>
    )
}

export default ParticleCanvas;