import { render, screen } from "@testing-library/react";
import Post from ".."; // Importa o componente

describe("Teste do componente Post", () => {
test("Deve renderizar o componente corretamente com a imagem e o texto", () => {
    // Renderiza o componente Post com a imagem e o texto fornecidos
    render(<Post imageUrl="https://via.placeholder.com/250x250">Teste</Post>);

    // Verifica se o texto fornecido está presente no componente
    expect(screen.getByText("Teste")).toBeInTheDocument();

    // Verifica se a imagem está presente e tem o atributo src correto
    const postImage = screen.getByAltText("Post");
    expect(postImage).toBeInTheDocument();
    expect(postImage).toHaveAttribute("src", "https://via.placeholder.com/250x250");

    // Verifica se o elemento de comentários está presente no componente
    expect(screen.getByTestId("post-comments")).toBeInTheDocument();
});

test("Deve renderizar o componente corretamente sem a imagem e com o texto", () => {
    // Renderiza o componente Post com um URL de imagem padrão
    render(<Post imageUrl="https://via.placeholder.com/1x1">Teste sem imagem</Post>);

    // Verifica se o texto fornecido está presente no componente
    expect(screen.getByText("Teste sem imagem")).toBeInTheDocument();

    // Verifica se a imagem está presente, mas com o tamanho padrão
    const postImage = screen.getByAltText("Post");
    expect(postImage).toBeInTheDocument();
    expect(postImage).toHaveAttribute("src", "https://via.placeholder.com/1x1");
});

test("Deve renderizar corretamente com diferentes textos e URLs de imagem", () => {
    // Renderiza o componente Post com diferentes textos e URLs de imagem
    render(<Post imageUrl="https://via.placeholder.com/100x100">Texto Alternativo</Post>);

    // Verifica se o texto fornecido está presente no componente
    expect(screen.getByText("Texto Alternativo")).toBeInTheDocument();

    // Verifica se a imagem está presente e tem o atributo src correto
    const postImage = screen.getByAltText("Post");
    expect(postImage).toBeInTheDocument();
    expect(postImage).toHaveAttribute("src", "https://via.placeholder.com/100x100");
});
});