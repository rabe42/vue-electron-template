import log4javascript from 'log4javascript'

export const logger = log4javascript.getLogger();
var appender = new log4javascript.BrowserConsoleAppender()
logger.addAppender(appender)
