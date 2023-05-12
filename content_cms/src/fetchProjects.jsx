import { createClient } from "contentful";

const client = createClient({
  space: "4octp27xqpo3",
  environment: "master",
  accessToken: "CvrJO75v-oztGBWv_TYy_Sl3kFlSSn71NIoeH4Ql0AU",
});

client
  .getEntries({ content_type: "projects" })
  .then((response) => console.log(response));
