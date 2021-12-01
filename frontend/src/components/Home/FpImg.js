import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const imgLists = [
  "/images/fpImg1.jfif",
  "/images/fpImg2.jfif",
  "/images/fpImg3.jfif",
  "/images/fpImg4.jfif",
  "/images/fpImg5.png",
  "/images/fpImg6.jfif",
  "/images/fpImg7.jfif",
  "/images/fpImg8.jfif",
];

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <div className="imageList">
      <ImageList
        sx={{ width: 1, height: 1 }}
        variant="quilted"
        cols={4}
        rowHeight={200}
      >
        {itemData.map(item => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: imgLists[0],
    title: "ai",
    rows: 2,
    cols: 2,
  },
  {
    img: imgLists[1],
    title: "bigdata",
  },
  {
    img: imgLists[2],
    title: "blockchain",
  },
  {
    img: imgLists[3],
    title: "3dprint",
    cols: 2,
  },
  {
    img: imgLists[4],
    title: "healthcara",
    cols: 2,
  },
  {
    img: imgLists[5],
    title: "vr",
    rows: 2,
    cols: 2,
  },
  {
    img: imgLists[6],
    title: "metaverse",
  },
  {
    img: imgLists[7],
    title: "Fern",
  },
];
