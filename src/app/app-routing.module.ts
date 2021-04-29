import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'meus-enderecos',
    loadChildren: () => import('./meus-enderecos/meus-enderecos.module').then( m => m.MeusEnderecosPageModule)
  },
  {
    path: 'pesquisar-endereco',
    loadChildren: () => import('./pesquisar-endereco/pesquisar-endereco.module').then( m => m.PesquisarEnderecoPageModule)
  },
  {
    path: 'notificacoes',
    loadChildren: () => import('./notificacoes/notificacoes.module').then( m => m.NotificacoesPageModule)
  },
  {
    path: 'categoria',
    loadChildren: () => import('./categoria/categoria.module').then( m => m.CategoriaPageModule)
  },
  {
    path: 'produto',
    loadChildren: () => import('./produto/produto.module').then( m => m.ProdutoPageModule)
  },
  {
    path: 'carrinho',
    loadChildren: () => import('./carrinho/carrinho.module').then( m => m.CarrinhoPageModule)
  },
  {
    path: 'cupons',
    loadChildren: () => import('./cupons/cupons.module').then( m => m.CuponsPageModule)
  },
  {
    path: 'meus-dados',
    loadChildren: () => import('./meus-dados/meus-dados.module').then( m => m.MeusDadosPageModule)
  },
  {
    path: 'formas-de-pagamento',
    loadChildren: () => import('./formas-de-pagamento/formas-de-pagamento.module').then( m => m.FormasDePagamentoPageModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./categorias/categorias.module').then( m => m.CategoriasPageModule)
  },
  {
    path: 'pedido',
    loadChildren: () => import('./pedido/pedido.module').then( m => m.PedidoPageModule)
  },
  {
    path: 'add-forma-pgto',
    loadChildren: () => import('./add-forma-pgto/add-forma-pgto.module').then( m => m.AddFormaPgtoPageModule)
  },
  {
    path: 'ajuda',
    loadChildren: () => import('./ajuda/ajuda.module').then( m => m.AjudaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'avaliacao',
    loadChildren: () => import('./avaliacao/avaliacao.module').then( m => m.AvaliacaoPageModule)
  },
  {
    path: 'mapa-endereco',
    loadChildren: () => import('./mapa-endereco/mapa-endereco.module').then( m => m.MapaEnderecoPageModule)
  },
  {
    path: 'add-endereco',
    loadChildren: () => import('./add-endereco/add-endereco.module').then( m => m.AddEnderecoPageModule)
  },
  {
    path: 'chats',
    loadChildren: () => import('./chats/chats.module').then( m => m.ChatsPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'esqueceu-senha',
    loadChildren: () => import('./esqueceu-senha/esqueceu-senha.module').then( m => m.EsqueceuSenhaPageModule)
  },
  {
    path: 'confirmar-pedido',
    loadChildren: () => import('./confirmar-pedido/confirmar-pedido.module').then( m => m.ConfirmarPedidoPageModule)
  },
  {
    path: 'acompanhe-pedido',
    loadChildren: () => import('./acompanhe-pedido/acompanhe-pedido.module').then( m => m.AcompanhePedidoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
