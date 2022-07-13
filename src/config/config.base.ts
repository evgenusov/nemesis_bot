export interface IConfigBase {
  PORT: number;
  DTF_API_KEY: string;

  // Lint to API of OCHOBA
  OCHOBA_URL: string;

  // Subsite from DTF
  SITE_URL: string;

  // Change to send comment to site from SITE_URL
  CHANCE_TO_SEND_COMMENT: number;

  // BOT WILL SEND COMMENT ONLY IF USER SAYS ONE OF THESE WORDS
  TRIGGER_WORDS: string[];

  // WE NEED THIS TO AVOID BOT TO SEND COMMENT TO ITSELF
  BOT_ID: number;
}
