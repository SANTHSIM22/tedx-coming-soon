import { MeshBasicMaterial } from "three";
import { Object3DNode, MaterialNode } from "@react-three/fiber";
import { MeshBasicMaterial, MeshBasicMaterialParameters } from "three";

import { BentPlaneGeometry } from "@/lib/extenders/bentPlaneGeometry";
import { MeshSineMaterial } from "@/lib/extenders/meshSineMaterial";

declare module "@react-three/fiber" {
  interface ThreeElements {
    bentPlaneGeometry: Object3DNode<
      BentPlaneGeometry,
      typeof BentPlaneGeometry
    >;
    meshSineMaterial: MaterialNode<MeshSineMaterial, typeof MeshSineMaterial>;
  }
}

import { MeshBasicMaterial, MeshBasicMaterialParameters } from "three";

declare module "three" {
  interface MeshSineMaterial extends MeshBasicMaterial {
    // eslint-disable-next-line @typescript-eslint/no-misused-new
    constructor(parameters?: MeshBasicMaterialParameters): void;
    time: { value: number };
  }
}
