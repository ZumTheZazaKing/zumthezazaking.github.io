import * as THREE from 'three'
import { scene } from '../App'

export default function addStar(){
    const geometry = new THREE.SphereGeometry(0.25,24,24)
    const material = new THREE.MeshStandardMaterial({color:0xffffff})
    const star = new THREE.Mesh(geometry,material)

    const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(200))

    star.position.set(x,y,z)
    scene.add(star)

}