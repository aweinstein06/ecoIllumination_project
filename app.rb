require 'sinatra'
require './Lightbulb'

enable :sessions

get '/' do
	erb :index
end

get '/calculator' do
	erb :calculator
end

post '/calculate_post' do
	session[:lightbulb] = Lightbulb.new(params[:CostForm].to_i, params[:WattageForm].to_i, params[:LuminageForm].to_i, "", params[:LifespanForm].to_i, params[:shape], params[:SizeForm], params[:base], params[:warmth], params[:frosted], params[:dimmable])

	session[:alternatives] = findAlternatives(session[:lightbulb] )


	puts "-------- Show UP ----------"
	puts "Print me: #{session[:alternatives]} homey!"

	session[:alternatives].each do |bulb|
		puts bulb
	end

	redirect to('/results')
end

get '/about' do
	erb :about
end

get '/results' do
	#how to pass parameters froma post route to a get route in ruby sinatra
	if(!session[:alternatives].nil?)
		@alternatives = session[:alternatives]
	end

	if(!session[:lightbulb].nil?)
		@lightbulb = session[:lightbulb]
	end

	erb :results
end