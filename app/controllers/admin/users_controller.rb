class Admin::UsersController < AdminController

  before_filter :setup

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
    @item.update item_params
    if params[:save]
      redirect_to send("admin_" + @name + "s_path")
    else
      redirect_to send("admin_" + @name + "_path", @item)
    end
  end

  def create
    @item = @model.create item_params
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
  
  private

  def setup
    @model = User
    @name = "user"
    @breads = [[t(:control), '/admin'], [t(@name+"s")]]
  end

  def item_params
    params.require(@name).permit!
  end

end