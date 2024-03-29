import React, { useRef, useEffect, } from 'react';
import * as THREE from 'three';

const BackgroundPartical: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const camera = useRef<THREE.PerspectiveCamera | null>(null);
  const scene = useRef<THREE.Scene | null>(null);
  const renderer = useRef<THREE.WebGLRenderer | null>(null);
  const groups = useRef<THREE.Group[]>([]);

  let scrollPercent = 0

  const SEPARATION = 200, AMOUNTX = 40, AMOUNTY = 10, height = window.innerHeight;

  let count = 0;

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    camera.current = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.01, 10000);
    let distance = 1 / 2 * window.innerHeight / (Math.tan(80 / 2))
    camera.current.position.z = distance;
    scene.current = new THREE.Scene();
    const PI2 = Math.PI * 2;
    // const material = new THREE.SpriteMaterial({
    //   color: 0x717BF7,
    // });
    const material = new THREE.MeshBasicMaterial({ color: 0x717BF7 })

    const group1 = new THREE.Group();
    const group2 = new THREE.Group();
    const group3 = new THREE.Group();
    const group4 = new THREE.Group();
    const group5 = new THREE.Group();
    const group6 = new THREE.Group();
    const group7 = new THREE.Group();
    const group8 = new THREE.Group();

    scene.current.add(group1)
    scene.current.add(group2)
    scene.current.add(group3)
    scene.current.add(group4)
    scene.current.add(group5)
    scene.current.add(group6)
    scene.current.add(group7)
    scene.current.add(group8)

    group1.position.y = -height / 2
    group2.position.y = -height * 3 / 2;
    group3.position.y = -height * 5 / 2;
    group4.position.y = -height * 7 / 2;
    group5.position.y = -height * 9 / 2;
    group6.position.y = -height * 11 / 2;
    group7.position.y = -height * 13 / 2;
    group8.position.y = -height * 15 / 2;

    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
        const particle = new THREE.Mesh(sphereGeometry, material);
        particle.position.x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
        particle.position.z = iy * SEPARATION - ((AMOUNTY * SEPARATION) - 10);

        group1.add(particle);
        group2.add(particle.clone());
        group3.add(particle.clone());
        group4.add(particle.clone());
        group5.add(particle.clone());
        group6.add(particle.clone());
        group7.add(particle.clone());
        group8.add(particle.clone());

        groups.current.push(group1);
        groups.current.push(group2);
        groups.current.push(group3);
        groups.current.push(group4);
        groups.current.push(group5);
        groups.current.push(group6);
        groups.current.push(group7);
        groups.current.push(group8);
      }
    }

    renderer.current = new THREE.WebGLRenderer();
    renderer.current.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.current.domElement);

    window.addEventListener('resize', onWindowResize, false);

    animate();

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  const handleScrollEvent = () => {
    console.log(document.documentElement.scrollTop);
    scrollPercent = (document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight));
    console.log(scrollPercent);
    if (camera.current) {
      camera.current.position.y = -scrollPercent * height * 8
    }
  }

  const onWindowResize = () => {
    if (!camera.current || !renderer.current) return;

    camera.current.aspect = window.innerWidth / window.innerHeight;
    camera.current.updateProjectionMatrix();
    renderer.current.setSize(window.innerWidth, window.innerHeight);
  };

  const animate = () => {
    requestAnimationFrame(animate);
    render();
  };

  const render = () => {
    if (!camera.current || !renderer.current) return;

    for (let gx = 0; gx < groups.current.length; gx++) {
      let i = 0;
      const particles = groups.current[gx].children;

      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          const particle = particles[i++];
          if (!particle) return;
          particle.position.y = (Math.sin((ix + count) * 0.5) * 1) + (Math.sin((iy + count) * 0.5) * 1);
          particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.5) + 2) * 2 + (Math.sin((iy + count) * 0.5) + 1) * 2;
        }
      }
    }

    if (!renderer.current || !scene.current || !camera.current) return;
    renderer.current.render(scene.current, camera.current);
    count = 0.05;
  };

  return (
    <>
      <div ref={containerRef} className='fixed h-screen w-screen' />
    </>
  )
};

export default BackgroundPartical;