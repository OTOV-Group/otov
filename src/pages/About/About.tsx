import { Description, Image, Main } from "../../static/tags";
import OTOV from "../../assets/icons/OTOV.png";
import { Box } from "@mui/material";

const About = () => {
  return (
    <Box className="h-[80vh] overflow-hidden overflow-y-scroll">
      <Main className="bg-[#138d80] rounded-xl overflow-y-scroll">
        <Image src={OTOV} />
      </Main>

      <Description className="bg-[#138d80] my-16 rounded-xl p-5 text-white text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, in.
        Suscipit, sed voluptate eligendi alias vitae ut, necessitatibus earum
        aut veritatis, neque voluptates perferendis quas quibusdam eaque illum
        eveniet voluptatem architecto fugit deserunt animi aspernatur dolorem.
        Corrupti, culpa? Est, assumenda incidunt. Repudiandae, possimus dolore
        obcaecati at ad tempora voluptatibus consequuntur magni! Repudiandae
        distinctio tempore iste id magni sunt pariatur, blanditiis, esse
        aspernatur hic quis molestias deserunt nostrum voluptas doloribus fugiat
        quia. Eveniet exercitationem, placeat dolorem eligendi, nisi molestias
        inventore modi commodi recusandae ratione in quidem dolor suscipit
        labore. Incidunt ratione est nostrum impedit fugit velit nam repellendus
        et obcaecati voluptas, possimus sed atque sequi dolore commodi. Veniam
        obcaecati deserunt quasi nemo autem provident animi nihil a suscipit
        excepturi porro illum inventore, voluptates iusto non quod corporis quos
        harum? Sit debitis suscipit vero tenetur eum, qui sunt aliquid quod nemo
        ratione exercitationem amet dolor soluta quibusdam earum est corrupti
        laboriosam unde, ex veritatis. Corporis reiciendis totam eligendi at
        exercitationem reprehenderit? Molestiae, a enim id harum repudiandae
        quidem esse voluptas reiciendis. Ea expedita labore sunt magnam?
        Consectetur corrupti eligendi deserunt, tenetur hic quis quae molestias
        minus eum vitae ipsam, consequuntur nemo? Vero voluptatibus ut et
        aperiam provident est repudiandae porro molestias perferendis.
      </Description>
    </Box>
  );
};

export default About;
