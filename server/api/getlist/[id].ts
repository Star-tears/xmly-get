import utils from "util";
import child_process from "child_process";
const exec = utils.promisify(child_process.exec);

async function execute_xmlycli() {
  const { stdout, stderr } = await exec(process.env.XMLYCLI!);
  console.log("stdout:", stdout);
  console.error("stderr:", stderr);
  return stdout;
}
export default defineEventHandler(async (event) => {
  const id = event.context.params!.id;
  console.log(id);
  // const data = await execute_xmlycli();
  return id;
});
