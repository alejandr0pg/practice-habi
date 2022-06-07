import { IFormStructure } from './../../interfaces/IFormStructure.interface';

const formStructure: IFormStructure[] = [
  {
    "name": "name",
    "label": "Nombre y apellido",
    "type": "text",
    "description": "",
    "rules": {
      "required": true
    },
    "path": "basic-info",
    "order": 0
  },
  {
    "name": "email",
    "label": "Correo electrónico",
    "type": "email",
    "description": "",
    "rules": {
      "required": true,
      "pattern": /^\S+@\S+$/i
    },
    "path": "email-info",
    "order": 1
  },
  {
    "name": "address",
    "label": "Dirección del inmueble",
    "type": "text",
    "description": "",
    "rules": {
      "required": true
    },
    "path": "address",
    "order": 2
  },
  {
    "name": "floor",
    "label": "Número de piso",
    "type": "number",
    "description": "",
    "rules": {
      "max": 50,
      "required": true
    },
    "path": "floor-number",
    "order": 3
  },
  {
    "name": "areas",
    "label": "¿Que areas tiene el inmueble?",
    "type": "switch-group",
    "path": "areas-info",
    "order": 4,
    "options": [
      { label: "Sala", value: "sala" },
      { label: "Comedor", value: "comedor" },
      { label: "Terraza", value: "terraza" },
      { label: "Patio", value: "patio" },
    ]
  },
  {
    "name": "parking",
    "label": "¿Cuenta con estacionamiento?",
    "type": "switch",
    "path": "parking-info",
    "order": 5
  },
  {
    "name": "amount",
    "label": "Monto del inmueble",
    "type": "currency",
    "description": "",
    "rules": {
      "required": true
    },
    "path": "amount",
    "order": 6
  },
  {
    "name": "photo",
    "label": "Imagen del inmueble",
    "type": "file",
    "description": "",
    "path": "take-picture",
    "order": 7
  },
  {
    "name": "elevator",
    "label": "¿Cuenta con ascensor el apto?",
    "type": "switch",
    "description": "",
    "path": "have-elevator",
    "order": 8
  }
]

export default formStructure;