// import { Grid } from "@mui/material";
// import TechCard from "./TechCard";

// export default function TechGrid({ data, onSelect }) {
//   return (
//     <Grid container spacing={3}>
//       {data.map((tech) => (
//         <Grid item xs={6} sm={4} md={3} key={tech.name}>
//           <TechCard tech={tech} onClick={() => onSelect(tech)} />
//         </Grid>
//       ))}
//     </Grid>
//   );
// }


import { Grid } from "@mui/material";
import TechCard from "./TechCard";

export default function TechGrid({ data, onSelect }) {
  return (
    <Grid container spacing={4} alignItems="stretch">
      {data.map((tech) => (
        <Grid
          item
          xs={4}   // 12/4 = 3 cards per row on mobile (<768px)
          sm={3}   // 12/3 = 4 cards per row on tablet/desktop (>=768px)
          key={tech.name}
        >
          <TechCard tech={tech} onClick={() => onSelect(tech)} />
        </Grid>
      ))}
    </Grid>
  );
}
