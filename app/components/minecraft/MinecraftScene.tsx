'use client';

import { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { createMinecraftTexture } from './MinecraftTextures';

interface MinecraftBlockProps {
    position: [number, number, number];
    blockType: 'grass' | 'dirt' | 'stone' | 'wood' | 'diamond' | 'gold';
    rotationSpeed?: number;
}

function MinecraftBlock({
    position,
    blockType,
    rotationSpeed = 0.01,
}: MinecraftBlockProps) {
    const meshRef = useRef<THREE.Mesh>(null);
    const materialsRef = useRef<THREE.MeshStandardMaterial[]>([]);

    // Create textures for each face
    useEffect(() => {
        const materials: THREE.MeshStandardMaterial[] = [];

        if (blockType === 'grass') {
            // Grass block: green top, brown sides, dirt bottom
            const topTexture = createMinecraftTexture('#7CB342', 'grass');
            const sideTexture = createMinecraftTexture('#7CB342', 'grass');
            const bottomTexture = createMinecraftTexture('#8B6F47', 'dirt');

            materials.push(new THREE.MeshStandardMaterial({ map: topTexture })); // Top
            materials.push(
                new THREE.MeshStandardMaterial({ map: bottomTexture })
            ); // Bottom
            materials.push(
                new THREE.MeshStandardMaterial({ map: sideTexture })
            ); // Front
            materials.push(
                new THREE.MeshStandardMaterial({ map: sideTexture })
            ); // Back
            materials.push(
                new THREE.MeshStandardMaterial({ map: sideTexture })
            ); // Right
            materials.push(
                new THREE.MeshStandardMaterial({ map: sideTexture })
            ); // Left
        } else {
            // Other blocks: same texture on all sides
            const baseColor =
                blockType === 'dirt'
                    ? '#8B6F47'
                    : blockType === 'stone'
                      ? '#9E9E9E'
                      : blockType === 'wood'
                        ? '#8D6E63'
                        : blockType === 'diamond'
                          ? '#00BCD4'
                          : blockType === 'gold'
                            ? '#FFC107'
                            : '#000000';
            const texture = createMinecraftTexture(baseColor, blockType);
            for (let i = 0; i < 6; i++) {
                materials.push(
                    new THREE.MeshStandardMaterial({ map: texture.clone() })
                );
            }
        }

        materialsRef.current = materials;

        if (meshRef.current) {
            meshRef.current.material = materials;
        }

        return () => {
            materials.forEach((mat) => {
                if (mat.map) mat.map.dispose();
                mat.dispose();
            });
        };
    }, [blockType]);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += rotationSpeed;
            meshRef.current.rotation.x += rotationSpeed * 0.5;
        }
    });

    return (
        <mesh ref={meshRef} position={position}>
            <boxGeometry args={[1, 1, 1]} />
        </mesh>
    );
}

export default function MinecraftScene() {
    const blocks = useMemo(
        () => [
            {
                position: [-2, 0, 0] as [number, number, number],
                type: 'grass' as const,
                speed: 0.01,
            },
            {
                position: [0, 0, 0] as [number, number, number],
                type: 'dirt' as const,
                speed: 0.015,
            },
            {
                position: [2, 0, 0] as [number, number, number],
                type: 'stone' as const,
                speed: 0.012,
            },
            {
                position: [-1, 1.5, 0] as [number, number, number],
                type: 'wood' as const,
                speed: 0.008,
            },
            {
                position: [1, 1.5, 0] as [number, number, number],
                type: 'diamond' as const,
                speed: 0.02,
            },
            {
                position: [0, 3, 0] as [number, number, number],
                type: 'gold' as const,
                speed: 0.01,
            },
        ],
        []
    );

    return (
        <>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} />
            <pointLight
                position={[-5, -5, -5]}
                intensity={0.4}
                color='#64B5F6'
            />
            {blocks.map((block, index) => (
                <MinecraftBlock
                    key={index}
                    position={block.position}
                    blockType={block.type}
                    rotationSpeed={block.speed}
                />
            ))}
        </>
    );
}
