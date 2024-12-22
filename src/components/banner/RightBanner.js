// import React from "react";
// import { bannerImg } from "../../assets/index";

// const RightBanner = () => {
//   return (
//     <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
//       {/* <img
//         className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
//         src={bannerImg}
//         alt="bannerImg"
//       /> */}
//       {/* <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div> */}
//     </div>
//   );
// };

// export default RightBanner;
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import avatarImage from "../../assets/images/avatar.jpg"; // High-res image

const RightBanner = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      bannerRef.current.clientWidth / bannerRef.current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable transparency
    renderer.setSize(
      bannerRef.current.clientWidth,
      bannerRef.current.clientHeight
    );
    renderer.setPixelRatio(window.devicePixelRatio); // Ensure high pixel ratio for sharper render
    renderer.setClearColor(0x000000, 0); // Set background to transparent
    bannerRef.current.appendChild(renderer.domElement);

    // Create a cube with avatar texture
    const avatarTexture = new THREE.TextureLoader().load(
      avatarImage,
      (texture) => {
        texture.minFilter = THREE.NearestFilter; // Sharpen textures during scaling
        texture.magFilter = THREE.NearestFilter; // Sharpen textures during magnification
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy(); // Maximize sharpness
      }
    );

    const avatar = new THREE.Mesh(
      new THREE.BoxGeometry(3, 3, 3),
      new THREE.MeshBasicMaterial({ map: avatarTexture })
    );
    scene.add(avatar);

    // Position camera
    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      avatar.rotation.x += 0.01;
      avatar.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on component unmount
    return () => {
      renderer.dispose();
      bannerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={bannerRef}
      className="w-full lgl:w-1/2 flex justify-center items-center relative"
      style={{ height: "100vh" }}
    ></div>
  );
};

export default RightBanner;
