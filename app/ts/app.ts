const controller = new NegociacaoController();
//Evento ao submeter o formulário
$('.form').submit(controller.adiciona.bind(controller));
