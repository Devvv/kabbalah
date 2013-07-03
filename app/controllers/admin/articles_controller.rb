class Admin::ArticlesController < AdminController

  before_filter :setup

  def setup
    @model = Article
    @name = "article"
  end

  def index
    @items = @model.all
  end

  def show
    @item = @model.find(params[:id])
  end

  def edit
    @item = @model.find(params[:id])
  end

  def new
    @item = @model.new()
  end

  def update
    @item = @model.find(params[:id])
    @item.update_attributes params[@name]
    if params[:save]
      redirect_to send("admin_" + @name + "s_path")
    else
      redirect_to send("admin_" + @name + "_path", @item)
    end
  end

  def create
    @item = @model.create params[@name]
    if params[:save]
      redirect_to send("admin_" + @name + "s_path")
    else
      redirect_to send("admin_" + @name + "_path", @item)
    end
  end

  def destroy
    @model.find(params[:id]).destroy
    redirect_to send("admin_" + @name + "s_path")
  end

end