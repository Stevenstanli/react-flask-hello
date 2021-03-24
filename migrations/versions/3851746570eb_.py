"""empty message

Revision ID: 3851746570eb
Revises: 
Create Date: 2021-03-24 19:57:37.615234

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3851746570eb'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('category',
    sa.Column('id_Category', sa.Integer(), nullable=False),
    sa.Column('name_Category', sa.String(length=120), nullable=False),
    sa.Column('description_Category', sa.String(length=250), nullable=False),
    sa.Column('active_Product', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id_Category')
    )
    op.create_table('provider',
    sa.Column('id_Provider', sa.String(length=25), nullable=False),
    sa.Column('name_Provider', sa.String(length=120), nullable=False),
    sa.Column('active_Provider', sa.String(length=80), nullable=False),
    sa.PrimaryKeyConstraint('id_Provider')
    )
    op.create_table('user',
    sa.Column('id_Document_User', sa.String(length=25), nullable=False),
    sa.Column('name_User', sa.String(length=120), nullable=False),
    sa.Column('active_User', sa.String(length=80), nullable=False),
    sa.PrimaryKeyConstraint('id_Document_User')
    )
    op.create_table('product',
    sa.Column('id_Product', sa.String(length=25), nullable=False),
    sa.Column('name_Product', sa.String(length=120), nullable=False),
    sa.Column('id_Category', sa.Integer(), nullable=False),
    sa.Column('id_Provider', sa.String(length=25), nullable=False),
    sa.Column('active_Product', sa.String(length=80), nullable=False),
    sa.ForeignKeyConstraint(['id_Category'], ['category.id_Category'], ),
    sa.ForeignKeyConstraint(['id_Provider'], ['provider.id_Provider'], ),
    sa.PrimaryKeyConstraint('id_Product')
    )
    op.create_table('provider__details',
    sa.Column('id_Provider_Details', sa.String(length=25), nullable=False),
    sa.Column('id_Provider', sa.String(length=25), nullable=False),
    sa.Column('email_Provider_Details', sa.String(length=25), nullable=False),
    sa.Column('phone_Provider_Details', sa.String(length=30), nullable=False),
    sa.Column('address_Provider_Details', sa.String(length=250), nullable=False),
    sa.Column('payment_Type_Provider_Details', sa.String(length=30), nullable=False),
    sa.ForeignKeyConstraint(['id_Provider'], ['provider.id_Provider'], ),
    sa.PrimaryKeyConstraint('id_Provider_Details')
    )
    op.create_table('user__details',
    sa.Column('id_User_Details', sa.Integer(), nullable=False),
    sa.Column('id_Document_User', sa.String(length=25), nullable=False),
    sa.Column('email_User_Details', sa.String(length=50), nullable=False),
    sa.Column('password_User_Details', sa.String(length=300), nullable=False),
    sa.Column('cargo_User_Details', sa.String(length=20), nullable=False),
    sa.Column('phone_User_Details', sa.String(length=30), nullable=False),
    sa.Column('address_Details', sa.String(length=250), nullable=False),
    sa.ForeignKeyConstraint(['id_Document_User'], ['user.id_Document_User'], ),
    sa.PrimaryKeyConstraint('id_User_Details')
    )
    op.create_table('inventory',
    sa.Column('id_Inventory', sa.Integer(), nullable=False),
    sa.Column('id_Product', sa.String(length=120), nullable=False),
    sa.Column('quantity_Product_Inventory', sa.Integer(), nullable=False),
    sa.Column('max_Product_Inventory', sa.String(length=3), nullable=False),
    sa.Column('min_Product_Inventory', sa.Float(), nullable=False),
    sa.Column('total_Cost_Inventory', sa.Float(), nullable=False),
    sa.ForeignKeyConstraint(['id_Product'], ['product.id_Product'], ),
    sa.PrimaryKeyConstraint('id_Inventory')
    )
    op.create_table('movement__inventory',
    sa.Column('id_Movement', sa.Integer(), nullable=False),
    sa.Column('id_Product', sa.String(length=25), nullable=False),
    sa.Column('id_Document_User', sa.String(length=120), nullable=False),
    sa.Column('id_Orden', sa.String(length=50), nullable=False),
    sa.Column('quantity_Product_Movement', sa.Float(), nullable=False),
    sa.Column('type_Movement', sa.String(length=3), nullable=False),
    sa.Column('date_Movement', sa.Date(), nullable=False),
    sa.ForeignKeyConstraint(['id_Document_User'], ['user.id_Document_User'], ),
    sa.ForeignKeyConstraint(['id_Product'], ['product.id_Product'], ),
    sa.PrimaryKeyConstraint('id_Movement')
    )
    op.create_table('product__details',
    sa.Column('id_Product_Details', sa.Integer(), nullable=False),
    sa.Column('id_Product', sa.String(length=25), nullable=True),
    sa.Column('trade_Product_Details', sa.String(length=30), nullable=False),
    sa.Column('tax_Product_Details', sa.Float(), nullable=False),
    sa.Column('description_Product_Details', sa.String(length=350), nullable=False),
    sa.Column('price_In_Product_Details', sa.Float(), nullable=False),
    sa.Column('profit_Product_Details', sa.Float(), nullable=False),
    sa.Column('price_Out_Product_Details', sa.Float(), nullable=False),
    sa.Column('discount_Product_Details', sa.Float(), nullable=False),
    sa.ForeignKeyConstraint(['id_Product'], ['product.id_Product'], ),
    sa.PrimaryKeyConstraint('id_Product_Details')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('product__details')
    op.drop_table('movement__inventory')
    op.drop_table('inventory')
    op.drop_table('user__details')
    op.drop_table('provider__details')
    op.drop_table('product')
    op.drop_table('user')
    op.drop_table('provider')
    op.drop_table('category')
    # ### end Alembic commands ###
