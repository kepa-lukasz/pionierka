import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'
import { useGLTF } from '@react-three/drei'

function Model({ url }) {
  const { scene } = useGLTF(url)
  return <primitive object={scene} />
}

function Loader() {
  return (
    <Html center>
      <div style={{ color: 'white' }}>Ładowanie modelu...</div>
    </Html>
  )
}

export default function ModelViewer({ source, position }) {
  const modelUrl = `${process.env.PUBLIC_URL}${source}/model.glb`
  return (
    <div className=' w-100 h-100'>
      <Canvas camera={{ position: position, fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[1,1,1]} />

        <Suspense fallback={<Loader />}>
        <Model url={`${process.env.PUBLIC_URL + source}/model.glb`} />
        </Suspense>

        <OrbitControls minDistance={100} maxDistance={1000} />
      </Canvas>
      
    </div>
  )
}
