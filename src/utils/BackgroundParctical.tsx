import React, { useRef, useEffect, useMemo, } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { ShaderPass } from 'three//examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass';
import { useBtnContext } from '../context/ButtonContext';

const BackgroundPartical: React.FC = () => {

  const { activeBtn, setActiveBtn } = useBtnContext()




  const containerRef = useRef<HTMLDivElement>(null);
  const camera = useRef<THREE.PerspectiveCamera | null>(null);
  const scene = useRef<THREE.Scene | null>(null);
  const renderer = useRef<THREE.WebGLRenderer | null>(null);
  const groups = useRef<THREE.Group[]>([]);
  const composer = useRef<EffectComposer | null>(null)
  const BLOOM_SCENE = 1;

  let scrollPercent = 0

  const SEPARATIONX = 400, SEPARATIONY = 250, AMOUNTX = 15, AMOUNTY = 12, height = window.innerHeight;

  let count = 0;

  const bloomLayer = new THREE.Layers();
  bloomLayer.set(BLOOM_SCENE);

  const params = {
    threshold: 0.02,
    strength: 1.0,
    radius: 0.1,
    exposure: 2.0
  };



  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    camera.current = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.01, 2200);


    let distance = 1 / 2 * window.innerHeight / (Math.tan(80 / 2))
    camera.current.position.z = distance;
    scene.current = new THREE.Scene();
    scene.current.fog = new THREE.Fog(0x000000, 1, 4000);

    const lighting = new THREE.DirectionalLight(0xffffff, 1.0)
    lighting.position.set(1, 1, 0)
    scene.current.add(lighting)
    scene.current.add(new THREE.AmbientLight(0xcccccc));

    const material = new THREE.MeshStandardMaterial({ color: 0x717BF7, roughness: 0, metalness: 0.7 })

    const materials = {}

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
        particle.position.x = ix * SEPARATIONX - (AMOUNTX * SEPARATIONX) / 2;
        particle.position.z = iy * SEPARATIONY - ((AMOUNTY * SEPARATIONY) - 10);

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

    renderer.current = new THREE.WebGLRenderer({ antialias: true });
    renderer.current.setPixelRatio(window.devicePixelRatio);
    renderer.current.setSize(window.innerWidth, window.innerHeight);
    renderer.current.toneMapping = THREE.ReinhardToneMapping;
    renderer.current.toneMappingExposure = Math.pow(params.exposure, 4.0);
    container.appendChild(renderer.current.domElement);

    const renderScene = new RenderPass(scene.current, camera.current);
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85)
    bloomPass.threshold = params.threshold;
    bloomPass.strength = params.strength;
    bloomPass.radius = params.radius;

    const outputPass = new OutputPass();

    composer.current = new EffectComposer(renderer.current)
    composer.current.addPass(renderScene);
    composer.current.addPass(bloomPass)
    composer.current.addPass(outputPass);

    window.addEventListener('resize', onWindowResize, false);

    animate();

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  const handleScrollEvent = () => {
    scrollPercent = (document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight));
    if (camera.current) {
      camera.current.position.y = -scrollPercent * height * 8
    }
    if (scrollPercent > 0.95) {
      setActiveBtn(5)
    } else if (scrollPercent > 5 / 7) {
      setActiveBtn(4)
    } else if (scrollPercent > 4 / 7) {
      setActiveBtn(3)
    } else if (scrollPercent > 2 / 7) {
      setActiveBtn(2)
    } else if (scrollPercent > 1 / 7) {
      setActiveBtn(1)
    } else {
      setActiveBtn(0)
    }
  }

  const onWindowResize = () => {
    if (!camera.current || !renderer.current) return;

    camera.current.aspect = window.innerWidth / window.innerHeight;
    camera.current.updateProjectionMatrix();

    renderer.current.setSize(window.innerWidth, window.innerHeight);
    composer.current?.setSize(window.innerWidth, window.innerHeight);
  };

  const animate = () => {
    requestAnimationFrame(animate);
    render();
    composer.current?.render()
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
          particle.position.y = (Math.sin((ix + count) * 0.5) * 40) + (Math.sin((iy + count) * 0.5) * 40);
          particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.5) + 2) * 1.5 + (Math.sin((iy + count) * 0.5) + 1) * 1.5;
        }
      }
    }

    if (!renderer.current || !scene.current || !camera.current) return;
    renderer.current.render(scene.current, camera.current);
    count += 0.05;
  };

  return (
    <>
      <div ref={containerRef} className='fixed h-screen w-screen' />
    </>
  )
};

export default BackgroundPartical;