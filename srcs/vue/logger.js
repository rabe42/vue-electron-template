/**
 * Retrieving the UI logger from the main thread and make sure, that both application
 * pathes uses the same logging infrastructure.
 */
import { remote } from "electron"
export const logger = remote.getGlobal("guiLogger")