
import { uploadEditor} from "./uploadEditor.js";
import './validity.js'
import { setUserFormSubmit } from "./validity.js";
import { closeModal } from "./uploadEditor.js";
import { getData } from './api.js'

import {onSuccess} from "./sorting.js";

uploadEditor()
setUserFormSubmit(closeModal, closeModal)

getData(onSuccess, 'GET')
