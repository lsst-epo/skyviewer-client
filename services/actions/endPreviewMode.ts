"use server";

import previewSession from "@/services/sessions/preview";

async function endPreviewMode() {
  previewSession().end();
}

export default endPreviewMode;
