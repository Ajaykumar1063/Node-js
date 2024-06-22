import { Box, SimpleGrid, Image,Stack, Card, Flex, Text,Group,Rating } from "@mantine/core";
import { useNavigate,useParams } from "react-router-dom";
import { useGetProductsById } from "../services/useProductServices";


const ProductDetailsPage = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [product,loading] = useGetProductsById(params.productId)
    console.log(product);

    //const products = 

    return ( 
        // <>
        // <img src={product.Image}
        // </>
        <Stack gap="lg" w="100%" mt={"5%"}>
         <SimpleGrid
        cols={{ base: 1, xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }}
        w="80%"
      >
        <Box  mah={500} mr={"30%"}>
        <Image fit="contain" h="100%" src={product.image} />
      </Box>
<Group>
      <Text ml={"10%"} mb={"10%"} w={"100%"}>
        {product.title}
      </Text>
      <Rating defaultValue={2}/>
      </Group>
      </SimpleGrid>
      </Stack>
     );
}
 
export default ProductDetailsPage;