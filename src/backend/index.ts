import { initializeScraperStore } from "./helpers/register";

// providers
import "./providers/gdriveplayer";
import "./providers/flixhq";
import "./providers/superstream";
import "./providers/netfilm";
import "./providers/m4ufree";

// embeds
import "./embeds/streamm4u";
import "./embeds/playm4u";

initializeScraperStore();
