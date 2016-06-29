get '/' do
  @abuelita = params[:abuelita]
  
  erb :index
  # Visita app/views/index.erb
end


post '/abuelita' do
  user_input = params[:user_input]

  saludo = user_input
      if saludo.downcase == "bye tqm bye tqm bye tqm"
        @abuelita = "BYE TQM"
      elsif saludo == saludo.upcase 
       @abuelita = "NO, NO DESDE 1983"
      elsif saludo == saludo.downcase
        @abuelita = "HUH?! NO TE ESCUCHO, HIJO!"
     end
     @abuelita
end


