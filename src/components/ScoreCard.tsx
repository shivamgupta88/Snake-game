import { Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { IGlobalState } from "../store/reducers";

const ScoreCard = () => {
    const score = useSelector((state: IGlobalState) => state.score);
    return (
        <div>
            <Heading as="h2" size="md" mt={5} mb={5}>Hi Score: {score}</Heading>
            <Heading as="h2" size="md" mt={5} mb={5}>Current Score: {score}</Heading>
        </div>
    );
}

export default ScoreCard;