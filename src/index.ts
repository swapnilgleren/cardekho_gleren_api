import ChromaDB_Test from "./modules/ChromaDB_Test.js";
import Langchain_1 from "./modules/Langchain_1.js";
import Langchain_PDF from "./modules/Langchain_PDF.js";
import Langchain_TXT from "./modules/Langchain_TXT.js";
import Langchain_URL from "./modules/Langchain_URL.js";

const langchain = new Langchain_URL();
// const langchain = new Langchain_TXT();
// langchain.main("My name is Moose?");
// Takes a text file, Splits it, Saves in a Faiss Vector Store Locally
// langchain.processTextToVectorStore();
// Using the vector store on Cyberize faq text
// langchain.useFaissVectorStrore();
// langchain.processURLToChromaVectorStore();
// langchain.processURLToFaissVectorStore();

// langchain.useFaissVectorStrore("What is SLG?");
// langchain.useFaissVectorStrore("What does SLG costs?");
// langchain.useFaissVectorStrore("Who does SLG works for?");
// langchain.useFaissVectorStrore("Who created SLG?");
// langchain.useFaissVectorStrore("Who is Mical?");
// langchain.useFaissVectorStrore("What is Cyberize Group?");
// langchain.useFaissVectorStrore("What is SpaceX?");
// langchain.useFaissVectorStrore("How can I get instant access?");
// langchain.useFaissVectorStrore("What is Local Business Doom?");
// langchain.useFaissVectorStrore(
//     "What is the actual value I'll receive if I spend $27"
//     );
// langchain.useFaissVectorStrore("What was Mical doing on Aug, 22nd, 1999?");
// langchain.useFaissVectorStrore("How old was Mical on Aug, 22nd, 1999?");
// langchain.useFaissVectorStrore("Where was Mical on Aug, 22nd, 1999?");
// langchain.useFaissVectorStrore("What are the tools I can get from SLG?");
// langchain.useFaissVectorStrore(
//   "What is the difference between SLG and old way of doing things?"
// );

const langchainPDF = new Langchain_PDF();

langchainPDF.processPDFToVectorStore();

langchainPDF.useFaissVectorStrore("What else did Mical hate?");


const chromaDBTest = new ChromaDB_Test();

// CREATE A CHROMA DB COLLECTION
// chromaDBTest.createChromaCollection("chromaMooseCol_1");

// DELETE A CHROMA DB COLLECTION
// chromaDBTest.deleteChromaCollection("chromaMooseCol_1");

// GET A LIST OF CHROMA DB COLLECTIONS
// chromaDBTest.getChromaCollections();
