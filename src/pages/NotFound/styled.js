import styled from 'styled-components'

export const NotFoundArea = styled.div`
background-color: #BA55D3;

.container {
	max-width: 1200px;
	margin: 0 auto;
	align-items: center;
	justify-content: center;
	display: flex;
	flex-direction: column;
	height: 400px;

	h2 {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 200px;
	}

	.botao {
		width: 100%;
		display: flex;

		a {
			text-decoration: none;
			padding: 10px 20px;
			border: 1px solid #4B0082;
			flex-direction: column;
		}
	}
}
`