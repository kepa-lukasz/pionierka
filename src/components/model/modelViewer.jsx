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

export default function ModelViewer({ model }) {
  return (
    <div style={{ width: '100%', height: '50vh' }}>
      <Canvas camera={{ position: model.position, fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[1,1,1]} />

        <Suspense fallback={<Loader />}>
          <Model url={model.source} />
        </Suspense>

        <OrbitControls minDistance={100} maxDistance={1000} />
      </Canvas>
      
    </div>
  )
}
