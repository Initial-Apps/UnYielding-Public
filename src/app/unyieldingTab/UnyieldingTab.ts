import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/unyieldingTab/index.html")
@PreventIframe("/unyieldingTab/config.html")
@PreventIframe("/unyieldingTab/remove.html")
export class UnyieldingTab {
}
