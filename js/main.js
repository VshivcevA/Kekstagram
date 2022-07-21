import { newPreview } from "./photo-render.js";
import { uploadEditor} from "./uploadEditor.js";
// import './validity.js'
import { setUserFormSubmit } from "./validity.js";
import { closeModal } from "./uploadEditor.js";
import { getData } from './api.js'

uploadEditor()

getData()


setUserFormSubmit(closeModal, closeModal)
